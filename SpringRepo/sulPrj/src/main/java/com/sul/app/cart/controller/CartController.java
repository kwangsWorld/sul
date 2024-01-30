package com.sul.app.cart.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sul.app.cart.service.CartService;
import com.sul.app.cart.vo.CartVo;
import com.sul.app.product.vo.ProductVo;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("cart")
@RequiredArgsConstructor
@Slf4j
public class CartController {
	
	private final CartService service;

	//장바구니 담기
	@PostMapping("add")
	public Map<String, String> add(@RequestBody ProductVo vo){
//		log.info("method called...");
//		System.out.println("리액트에서 받아온 장바구니 추가 vo : " + vo);
		
		Map<String, String> map = new HashMap<String, String>();
		int result = service.add(vo);
		
		if(result == 1) {
			map.put("msg", "good");
		}else {
			map.put("msg", "bad");
		}
		
		return map;
	}
	
	//장바구니 조회
	@PostMapping("list")
	public List<ProductVo> list(@RequestBody CartVo vo){
		
//		System.out.println("vo: " + vo);
		
		List<ProductVo> voList = service.list(vo);
		
//		System.out.println("쿼리문 이후 voList: " + voList);
		
		return voList;
	}
	
	//장바구니 선택삭제
	@PostMapping("deleteList")
	public Map<String, String> deleteList(@RequestBody List<String> nums) {
		
		System.out.println(nums);
		int result = service.deleteList(nums);
		Map<String, String> map = new HashMap<String,String>();
		
		System.out.println("결과값 : " + result);
		if(result == nums.size()) {
			map.put("msg", "good");
		}else {
			map.put("msg", "bad");
		}
		
		return map;
	}
	
	
	
}
