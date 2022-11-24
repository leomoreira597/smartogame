package com.arccorp.smartgame.repository

import com.arccorp.smartgame.models.PurchaseModel
import org.springframework.data.jpa.repository.JpaRepository

interface PurchseRepository: JpaRepository<PurchaseModel, Int> {
}