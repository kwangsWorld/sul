package com.sul.app.csboard.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sul.app.csboard.service.AdminCsBoardService;
import com.sul.app.csboard.vo.CsBoardVo;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("adminCsboard")
public class AdminCsBoardController {
	
	private final AdminCsBoardService service;
	
	// 고객센터 목록 조회
	@GetMapping("list")
	public List<CsBoardVo> list() {
		return service.list();
	}
	
	// 고객센터 상세 조회
	@GetMapping("detail")
	public CsBoardVo detail(CsBoardVo vo) {
		System.out.println(vo);
		return service.detail(vo);
	}
	
	// 고객센터 답변 작성
	@PostMapping("answer")
	public Map<String,String> answer(@RequestBody CsBoardVo vo) {
		System.out.println(vo);
		
		Map<String,String> map = new HashMap<String, String>();
		int result = service.answer(vo);
		
		if(result == 1) {
			map.put("msg", "good");
		}else {
			map.put("msg", "bad");
		}
		return map;
	}

}
