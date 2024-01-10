package com.sul.app.communitycommt.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.sul.app.communitycommt.service.CcommtService;
import com.sul.app.communitycommt.vo.CcommtVo;

import lombok.RequiredArgsConstructor;

@Controller
@RequestMapping("ccommt")
@RequiredArgsConstructor
public class CcommtController {
	
	private final CcommtService service;
	
	//댓글작성
	@PostMapping("insert")
	public String insert(CcommtVo vo) throws Exception{
		int result = service.insert(vo);
		
		if(result != 1) {
			throw new Exception();
		}
		return "redirect:/community/detail";
	}
	
	//댓글삭제
	@GetMapping("delete")
	public String delete(CcommtVo vo) throws Exception {
		int result = service.delete(vo);
		if(result != 1) {
			throw new Exception();
		}
		return "redirect:/community/detail";
	}
}