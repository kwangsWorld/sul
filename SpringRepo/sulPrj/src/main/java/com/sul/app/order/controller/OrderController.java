package com.sul.app.order.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
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
	
//  주문 추가
  @PostMapping("add")
  public Map<String, String> add(@RequestBody OrderVo vo){
     
     System.out.println("1111서버 들어옴");
     int result = service.add(vo);
     Map<String, String> map = new HashMap<String, String>();
     
     if(result == 1) {
        map.put("msg", "add 완료");
     }else {
        map.put("msg", "add 실패");
     }
     System.out.println("1111서버 나감");
     return map;
  }
  
//   주문 목록 추가
  @PostMapping("addList")
  public Map<String, String> addList(@RequestBody OrderVo vo){
     
     System.out.println("2222서버 들어옴");
     System.out.println("주문목록 추가 vo : "+ vo);
     
     int result = service.addList(vo);
     
     
     
     Map<String, String> map = new HashMap<String, String>();
     
     
     
     if(result == 1) {
        map.put("msg", "addList 완료");
     }else {
        map.put("msg", "addList 실패");
     }
     
     System.out.println("2222서버 나감");
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
	//주문내역 상세조회
	@PostMapping("detail")
	public List<OrderVo> detail(@RequestBody OrderVo vo){
		return service.detail(vo);
	}
	//주문취소
	@PostMapping("cancel")
	public Map<String, Object> cancel(@RequestBody OrderVo vo) throws Exception {
		System.out.println("order" + vo);
		Map<String, Object> map = new HashMap<String, Object>();
		int result = service.cancel(vo);
		if(result == 1) {
			map.put("msg", "good");
		}else {
			map.put("msg", "bad");			
		}
		return map;
	}
}
