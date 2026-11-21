# K-pop Empire website

Static marketing site for **kpopempire.net**. Plain HTML and CSS. No build step. Open `index.html` through any static server (the links start with `/`).

## Pages

| Page | Path |
|---|---|
| Home | `/` |
| Privacy policy | `/privacy` |
| Support | `/support` |
| Terms of use | `/terms` |
| Data deletion | `/delete-account` |
| Missing page | `404.html` |

## Store buttons

`links.js` holds the beta URLs. Change the `ios` string or the `android` string to point every Join the beta button at the live store. Then replace that same URL in the button `href`s in `index.html` and `support/index.html`, so the buttons still work if scripts are off.

- Live App Store: `https://apps.apple.com/app/id6831214430`
- Live Google Play: `https://play.google.com/store/apps/details?id=com.anelta.kpopempire`

## Publish on GitHub Pages

This folder is meant to be the **root** of a public repository. The game repo is private, and Pages on a private repo needs a paid plan.

1. Create a public repository (for example `AneltaIgweh/kpopempire-site`).
2. Copy the contents of this folder to that repository's root (`index.html` and `CNAME` at the root, not inside another `website/` folder).
3. Settings, Pages, source: **GitHub Actions**. The workflow in `.github/workflows/pages.yml` publishes the root on every push to `main`.
4. Settings, Pages, Custom domain: `kpopempire.net`. Save this **before** changing DNS at Porkbun. If GitHub shows a TXT record to verify the domain, add that record too. The TXT value is created by GitHub and is not stored in this repo.
5. Add the DNS records below at Porkbun. Delete any parking A records, URL redirects, or old `www` records first. Leave the nameservers on Porkbun's default.
6. When the certificate is ready, turn on Enforce HTTPS.

`CNAME` in this folder contains `kpopempire.net`. If you publish with GitHub Actions, set the custom domain in the Pages settings as well. Actions does not read that file.

Porkbun login is the account **aneltaigweh**. The password is in Anelta's Grok Bot vault entry `porkbun.com`. Do not put the password in the repository.

### DNS records

`www` points at `aneltaigweh.github.io`, not at a project path.

| Type | Host | Value |
|---|---|---|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |
| CNAME | `www` | `aneltaigweh.github.io` |

### URLs to give the stores

- Marketing: `https://kpopempire.net/`
- Support: `https://kpopempire.net/support`
- Privacy policy: `https://kpopempire.net/privacy`
- Terms: `https://kpopempire.net/terms`
- Account and data deletion: `https://kpopempire.net/delete-account`

Do not switch the in game privacy link until the privacy URL loads in a private browser window.
