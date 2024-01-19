package com.sul.app.order.controller;

import java.util.List;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sul.app.order.service.OrderService;
import com.sul.app.order.vo.OrderVo;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("order")
@RequiredArgsConstructor
public class OrderController {

	private final OrderService service;
	
	//내가 주문한 목록
	@PostMapping("list")
	public List<OrderVo> list(@RequestBody OrderVo vo){
		return service.list(vo);
	}
	
	//내가 주문한 목록
	@PostMapping("delete")
	public List<OrderVo> delete(@RequestBody OrderVo vo){
		return service.delete(vo);
	}
}
