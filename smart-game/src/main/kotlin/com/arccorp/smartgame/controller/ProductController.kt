package com.arccorp.smartgame.controller

import com.arccorp.smartgame.controller.response.ProductResponse
import com.arccorp.smartgame.extension.toResponse
import com.arccorp.smartgame.service.ProductService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("product")
class ProductController(
    private val productService: ProductService
) {

    @GetMapping
    fun getProducts(@RequestParam name: String?): List<ProductResponse>{
        return productService.getAll(name).map {it.toResponse()}
    }

    @GetMapping("/{id}")
    fun getSelectedProduct(@PathVariable id: Int): ProductResponse{
        return productService.findById(id).toResponse()
    }
}