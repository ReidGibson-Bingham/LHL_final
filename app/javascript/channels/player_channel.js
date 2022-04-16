// where client side subscriptions are handled

import consumer from "./consumer"

consumer.subscriptions.create({ channel: "GameChannel", room: "game room" })

// app/javascript/channels/appearance_channel.js
import consumer from "./consumer"

consumer.subscriptions.create({ channel: "AppearanceChannel" })