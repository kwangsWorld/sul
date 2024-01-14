package com.sul.app.cart.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.sul.app.cart.service.CartService;
import com.sul.app.product.vo.ProductVo;

import lombok.RequiredArgsConstructor;

@Controller
@RequestMapping("cart")
@RequiredArgsConstructor
public class CartController {
	
	private final CartService service;

	//장바구니 담기
	@PostMapping("add")
	public Map<String, String> add(ProductVo vo){
		
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
	@GetMapping("list")
	public List<ProductVo> list(ProductVo vo){
		
		List<ProductVo> voList = service.list(vo);
		
		return voList;
	}
	
	//장바구니 결제
//	public List<ProductVo> cartBuy(List<ProductVo> voList){
//	
//		
//	}
	
}
