## Status Tutorial
The landing page listing all the tutorial resources of the Status Network.

- https://tutorials.statusnetwork.com/

<br/>

## Setup
```
yarn install
yarn run start:dev
```

<br/>

## Production

Option 1: Local
```
yarn install
yarn run build
yarn run start
```

Option 2: Docker
```
docker build .
docker run -p 3000:3000 <image_id>
```

<br/>

## Deploy
Update `org` and `repot` in `/scripts/deploy.js`.
```
yarn run build
yarn run export
touch out/.nojekyll
yarn run deploy
```

<br/>

## References
- [Documentation](https://pankod.github.io/next-boilerplate/docs/deployment)
