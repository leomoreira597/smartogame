package com.arccorp.smartgame.exception

class BadRequestException(override val message: String, val errorCode: String) : Exception() {
}