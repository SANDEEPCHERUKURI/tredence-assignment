package com.example.chartapi.springbootcharapidocker;

import com.example.chartapi.springbootcharapidocker.Model.ArealChartModel;
import com.example.chartapi.springbootcharapidocker.Model.MobileChartModel;
import com.example.chartapi.springbootcharapidocker.Model.TestModel;
import com.example.chartapi.springbootcharapidocker.repository.AreaChartRepo;
import com.example.chartapi.springbootcharapidocker.repository.MobileChartRepo;
import com.example.chartapi.springbootcharapidocker.repository.TestRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/api")
public class ChartApiController {

    @Autowired
    TestRepo testRepo;

    @Autowired
    AreaChartRepo areaChartRepo;

    @Autowired
    MobileChartRepo mobileChartRepo;

    @PostMapping("/addTest")
    public TestModel addTest(@RequestBody TestModel testModel){
        return testRepo.save(testModel);
    }

    @GetMapping("/tests")
    public ResponseEntity<List<TestModel>> getTests() {
        return ResponseEntity.ok(testRepo.findAll());
    }

    @PostMapping("/areaChart")
    public ArealChartModel addAreaChart(@RequestBody ArealChartModel arealChartModel){
        return areaChartRepo.save(arealChartModel);
    }

    @GetMapping("/areaChart")
    public ResponseEntity<List<ArealChartModel>> getAreaChart() {
        return ResponseEntity.ok(areaChartRepo.findAll());
    }

    @PostMapping("/mobileChart")
    public MobileChartModel addMobileChart(@RequestBody MobileChartModel mobileChartModel){
        return mobileChartRepo.save(mobileChartModel);
    }

    @GetMapping("/mobileChart")
    public ResponseEntity<List<MobileChartModel>> getMobileChart() {
        return ResponseEntity.ok(mobileChartRepo.findAll());
    }

}
