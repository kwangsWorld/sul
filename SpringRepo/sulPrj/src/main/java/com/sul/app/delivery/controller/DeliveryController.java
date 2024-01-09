package com.sul.app.delivery.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sul.app.delivery.service.DeliveryService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("delivery")
public class DeliveryController {
	
	private final DeliveryService service;
	
	// 배송목록 조회
	
	// 배송목록 상세 조회
	
	// 배송상태 수정

}
