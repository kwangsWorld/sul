package com.sul.app.communitycommt.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sul.app.community.vo.CommunityVo;
import com.sul.app.communitycommt.service.CcommtService;
import com.sul.app.communitycommt.vo.CcommtVo;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("ccommt")
@RequiredArgsConstructor
public class CcommtController {
	
	private final CcommtService service;
	
	//댓글작성
	@PostMapping("insert")
	public Map<String, String> insert(@RequestBody CcommtVo vo, HttpSession session){
		Map<String, String> map = new HashMap<String, String>();
		int result = service.insert(vo);
		
		if(result == 1) {
			map.put("msg", "good");
		}else {
			map.put("msg", "bad");			
		}
		return map;
	}
	
	//댓글삭제
	@GetMapping("delete")
	public Map<String, Object> delete(@RequestBody CcommtVo vo) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		int result = service.delete(vo);
		if(result == 1) {
			map.put("msg", "good");
		}else {
			map.put("msg", "bad");
		}
		return map;
	}
	
	//댓글조회
	@PostMapping("list")
	public List<CcommtVo> list(@RequestBody CcommtVo vo) {
		System.out.println("댓글"+vo);
		
		System.out.println(service.list(vo));
		return service.list(vo);
	}
}