package com.arccorp.smartgame.exception

class NotFoundException(override val message: String, val errorCode: String) : Exception() {
}