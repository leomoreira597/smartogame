package com.arccorp.smartgame.controller

import com.arccorp.smartgame.controller.response.LocalResponse
import com.arccorp.smartgame.extension.toResponse
import com.arccorp.smartgame.service.LocalService
import org.springframework.stereotype.Service
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("local")
class LocalController(
    private val localService: LocalService
) {

    @GetMapping("/{id}")
    fun getLocalByProductId(@PathVariable id:Int): List<LocalResponse>{
        return localService.findLocalByProductId(id).map { it.toResponse() }
    }
}