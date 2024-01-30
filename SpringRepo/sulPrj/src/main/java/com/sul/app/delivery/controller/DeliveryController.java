package com.sul.app.delivery.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sul.app.common.PageVo;
import com.sul.app.delivery.service.DeliveryService;
import com.sul.app.delivery.vo.DeliveryVo;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequiredArgsConstructor
@RequestMapping("delivery")
@Slf4j
public class DeliveryController {

	private final DeliveryService service;

	// 배송목록 조회
	@PostMapping("list")
	public Map<String, Object> list(@RequestBody PageVo vo) {

		Map<String, Object> map = new HashMap<String, Object>();

		int start = (Integer.parseInt(vo.getPageNo()) - 1) * Integer.parseInt(vo.getLimit());

		vo.setPageNo(Integer.toString(start));

		int pageTotal = (int) Math.ceil((double) service.listAll(vo).size() / Integer.parseInt(vo.getLimit()));

		List<DeliveryVo> voList = new ArrayList<DeliveryVo>();

		voList = service.list(vo);
		map.put("pageTotal", pageTotal);
		map.put("voList", voList);

		return map;
	}

	// 배송목록 상세 조회
	@GetMapping("detail")
	public DeliveryVo detail(DeliveryVo vo) {
		return service.detail(vo);
	}
	
	// 배송추가
	@PostMapping("add")
	public Map<String , String> add(@RequestBody DeliveryVo vo){
		log.info("들어오는값" + vo);
		int result = service.add(vo);
		Map<String,String> map = new HashMap<String, String>();
		
		if(result == 1) {
			map.put("msg", "good");
		}else {
			map.put("msg", "bad");
		}
		
		log.info("나가는값" + map);
		return map;
	}

}
