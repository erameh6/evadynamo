#!/usr/bin/env python3
"""Static SPA server with history-fallback (serves dist/, index.html for unknown paths)."""
import http.server
import os
import socketserver

DIST = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'dist')
PORT = 8948


class SpaHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIST, **kwargs)

    def send_head(self):
        path = self.translate_path(self.path)
        # If the requested path is a real file, serve it.
        if os.path.isfile(path):
            return super().send_head()
        # Otherwise fall back to index.html for SPA client-side routing.
        self.path = '/index.html'
        return super().send_head()

    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache')
        super().end_headers()


class ThreadingServer(socketserver.ThreadingMixIn, http.server.HTTPServer):
    daemon_threads = True


if __name__ == '__main__':
    with ThreadingServer(('0.0.0.0', PORT), SpaHandler) as httpd:
        print(f'Serving {DIST} on :{PORT} with SPA fallback')
        httpd.serve_forever()
