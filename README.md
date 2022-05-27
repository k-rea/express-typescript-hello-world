# Express + Typescript Demo: Display Hello World.
## Environment

```bash
node --version # v16.13.1
http --version # 3.2.1
```

## Create working directory

```bash
mkdir express-typescript-hello-world
cd express-typescript-hello-world

```

## Project Setting

```bash
npm init -y
npm i express typescript
npm i -D @types/express ts-node-dev
npx tsc --init
```


## Create server

```bash
npx ts-node-dev src/index.ts
```

## Check server
```bash
http localhost:3000
```
