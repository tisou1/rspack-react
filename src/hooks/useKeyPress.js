import { useState, useEffect, useRef } from "react"
export default function useKeyPress(keyEvent) {
  // {'l': () => {}}

  // 不区分大小写
  const keysRef = useRef(Object.keys(keyEvent))

  const handleKeyDown = e => {
    console.log(e)
    // 当前按下的键
    const curKey = e.key

    if (keysRef.current.includes(curKey)) {
      keyEvent[e.key]?.()
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])
}

// 修饰键

const modifyierKey = {
  ctrl: "ctrl",
  shift: "shift",
  alt: "alt",
  meta: "meta",
}

/**
 *
 * @param {} event  触发事件
 * @param {*} keys  hook接收的按键
 */
function judgeKey(event, keys) {
  if (!event.key) return false
  // 传入的键拆开
  const genArr = keys.split(".")
  let genLen = 0

  for (const key of genArr) {
    // 组合键
    // const genModifer = modifyierKey[key]
    if (event.key === key) {
      genLen++
    }
  }

  return genLen === genArr.length
}
