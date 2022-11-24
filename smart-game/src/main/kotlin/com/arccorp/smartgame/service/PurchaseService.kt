package com.arccorp.smartgame.service

import com.arccorp.smartgame.enums.Errors
import com.arccorp.smartgame.exception.NotFoundException
import com.arccorp.smartgame.models.ProductModel
import com.arccorp.smartgame.models.PurchaseModel
import com.arccorp.smartgame.repository.ProductRepository
import com.arccorp.smartgame.repository.PurchseRepository
import org.springframework.stereotype.Service

@Service
class PurchaseService(
    private val productRepository: ProductRepository,
    private val purchaseRepository: PurchseRepository
) {
    fun findById(product: Int): ProductModel {
        return productRepository.findById(product)
            .orElseThrow { NotFoundException(Errors.SG101.message.format(product), Errors.SG101.code) }
    }

    fun create(purchase: PurchaseModel) {
        purchaseRepository.save(purchase)
    }
}