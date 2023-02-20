/**
 * Author: Moki
 * Date: 2023-02-17
 * FileName: 系统 channel
 **/

export const handleExit = () => {
    return window.__IPC__.invoke("notice:", {name: 12})
}
