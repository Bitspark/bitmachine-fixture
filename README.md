# bitmachine-fixture

The public development fixture of [bitmachine](https://github.com/Bitspark), a
self-hosted hosting platform. bitmachine's tests and demonstration register
this repository as a source, pin a commit of it, and start what it declares.

It holds only what bitmachine's first milestone exercises:

- `bitmachine.json`, the component manifest: one service, `web`, that runs a
  digest-pinned public `busybox` image and serves a static page on port 8080
  as an unprivileged, bounded process.

Later milestones add what bitmachine will build from source (a Dockerfile and
a small service, then an npm lockfile).

**Pinned use.** bitmachine's tests resolve `refs/heads/main` and assert the
commit they get against one pinned in bitmachine's own repository. A change
here therefore means updating that pin in the same bitmachine change. `main`
is protected against force-pushes and deletion.

It contains no secrets, credentials or real host names, and nothing derived
from private code.

Licensed under the Apache License, Version 2.0: see `LICENSE` and `NOTICE`.
