package com.arccorp.smartgame.enums

enum class Errors(val code: String, val message: String) {
    SG001("SG-0001", "Requsição invalida"),
    SG101("SG-101", "Prodduto [%s] não existe!!!")
}