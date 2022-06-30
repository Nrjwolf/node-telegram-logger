# Telegramm Logger

Log your app using Telegramm. 

## Installation and usage

In terminal/console type:

```
yarn add @nrjwolf/telegram-logger
```

or

```
npm install @nrjwolf/telegram-logger
```

## Usage 

```typescript
import { TelegramLogger } from '@nrjwolf/telegram-logger'
const tgLogger = new TelegramLogger('bot:token', 'chat_id', 'log prefix text')
tgLogger.sendMessage('message text')
```