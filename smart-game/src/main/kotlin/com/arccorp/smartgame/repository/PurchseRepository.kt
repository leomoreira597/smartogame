package com.arccorp.smartgame.repository

import com.arccorp.smartgame.models.PurchaseModel
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query

interface PurchseRepository: JpaRepository<PurchaseModel, Int> {

}