package com.example.chartapi.springbootcharapidocker.repository;

import com.example.chartapi.springbootcharapidocker.Model.MobileChartModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MobileChartRepo extends JpaRepository<MobileChartModel, Integer> {
}
