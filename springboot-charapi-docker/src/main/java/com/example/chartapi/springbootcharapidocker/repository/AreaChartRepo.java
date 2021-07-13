package com.example.chartapi.springbootcharapidocker.repository;

import com.example.chartapi.springbootcharapidocker.Model.ArealChartModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AreaChartRepo extends JpaRepository<ArealChartModel, Integer> {
}
