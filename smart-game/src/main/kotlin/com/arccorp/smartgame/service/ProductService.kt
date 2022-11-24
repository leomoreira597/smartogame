package com.arccorp.smartgame.service

import com.arccorp.smartgame.enums.Errors
import com.arccorp.smartgame.exception.NotFoundException
import com.arccorp.smartgame.models.ProductModel
import com.arccorp.smartgame.repository.ProductRepository
import org.springframework.stereotype.Service

@Service
class ProductService(
    val productRepository: ProductRepository
) {
    fun getAll(name: String?): List<ProductModel> {
        name?.let {
            return productRepository.findByNameContaining(it)
        }
        return productRepository.findAll().toList()
    }

    fun findById(id: Int): ProductModel {
        return productRepository.findById(id)
            .orElseThrow { NotFoundException(Errors.SG101.message.format(id), Errors.SG101.code) }
    }


}