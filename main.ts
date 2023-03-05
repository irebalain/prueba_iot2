ESP8266_IoT.initWIFI(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
ESP8266_IoT.connectWifi("Vodafone23_2.4G", "Betis100")
if (ESP8266_IoT.wifiState(true)) {
    basic.showString("WIF-OK")
} else {
    basic.showString("WIF-NOK")
}
basic.forever(function () {
    ESP8266_IoT.connectThingSpeak()
    if (ESP8266_IoT.thingSpeakState(true)) {
        basic.showString("TS-OK")
    } else {
        basic.showString("TS-NOK")
    }
    ESP8266_IoT.setData(
    "B538YZN6TAKIV3Q6",
    input.temperature(),
    input.soundLevel(),
    input.lightLevel()
    )
    ESP8266_IoT.uploadData()
    basic.pause(100000)
})
