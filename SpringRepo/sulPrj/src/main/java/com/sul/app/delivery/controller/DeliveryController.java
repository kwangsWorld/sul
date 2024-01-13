package com.sul.app.delivery.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sul.app.delivery.service.DeliveryService;
import com.sul.app.delivery.vo.DeliveryVo;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("delivery")
public class DeliveryController {

	private final DeliveryService service;

	// 배송목록 조회
	@GetMapping("list")
	public List<DeliveryVo> list() {
		return service.list();
	}

	// 배송목록 상세 조회
	@GetMapping("detail")
	public DeliveryVo detail(DeliveryVo vo) {
		return service.detail(vo);
	}

}
