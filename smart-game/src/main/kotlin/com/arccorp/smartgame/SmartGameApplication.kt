package com.arccorp.smartgame

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class SmartGameApplication

fun main(args: Array<String>) {
	runApplication<SmartGameApplication>(*args)
}
