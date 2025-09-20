Did adding HTTPS change how your app behaves?

Yes. The browser now treats the site as secure and blocks mixed content. All API calls and WebSocket connections must use https to avoid warnings. Cookies could be set with Secure in production.

Any setup issues or trust problems?

The browser warned about a self-signed cert (expected). Trusting the cert in Windows (certmgr) or clicking through the warning fixed local testing.

What needs to change for production?

Do not use self-signed certs. Terminate TLS with a real CA certificate (for example Let’s Encrypt) at a reverse proxy like NGINX or your cloud provider. Store secrets in env vars. Enforce HSTS and redirect HTTP to HTTPS.