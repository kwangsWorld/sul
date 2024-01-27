package com.sul.app.order.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
	
//	주문 추가
	@PostMapping("add")
	public Map<String, String> add(@RequestBody OrderVo vo){
		
		int result = service.add(vo);
		Map<String, String> map = new HashMap<String, String>();
		
		if(result == 1) {
			map.put("msg", "add 완료");
		}else {
			map.put("msg", "add 실패");
		}
		
		return map;
	}
	
// 	주문 목록 추가
	@PostMapping("addList")
	public Map<String, String> addList(@RequestBody OrderVo vo){
		
		int result = service.addList(vo);
		Map<String, String> map = new HashMap<String, String>();
		
		if(result == 1) {
			map.put("msg", "addList 완료");
		}else {
			map.put("msg", "addList 실패");
		}
		
		return map;
	}
	
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
