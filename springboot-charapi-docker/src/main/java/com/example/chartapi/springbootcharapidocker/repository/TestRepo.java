package com.example.chartapi.springbootcharapidocker.repository;

import com.example.chartapi.springbootcharapidocker.Model.TestModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TestRepo extends JpaRepository<TestModel,Integer> {

}
