package com.sul.app.member.controller;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sul.app.member.service.AdminMemberService;
import com.sul.app.member.vo.MemberVo;
import com.sul.app.notice.vo.PageVo;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("adminMember")
@RequiredArgsConstructor
public class AdminMemberController {

	private final AdminMemberService service;
	
	// 회원 목록 조회
	@PostMapping("list")
	public Map<String, Object> list(@RequestBody PageVo vo) {
		
		Map<String,Object> map = new HashMap<String, Object>();
		
		int start = (Integer.parseInt(vo.getPageNo())-1)*Integer.parseInt(vo.getLimit());
		
		vo.setPageNo(Integer.toString(start));
		
		int pageTotal = (int)Math.ceil((double)service.listAll(vo).size()/Integer.parseInt(vo.getLimit()));
		
		List<MemberVo> voList = new ArrayList<MemberVo>();
		
		voList = service.list(vo);
		map.put("pageTotal", pageTotal);
		map.put("voList", voList);
		
		return map;
	}
	
	// 회원 목록 상세 조회
	@GetMapping("detail")
	public MemberVo detail(MemberVo vo) {
		return service.detail(vo);
	}
	
	// 회원 삭제
	@PostMapping("delete")
	public Map<String,String> delete(@RequestBody MemberVo vo) {
		Map<String,String> map = new HashMap<String, String>();
		int result = service.delete(vo);
		
		if(result == 1) {
			map.put("msg", "good");
		}else {
			map.put("msg", "bad");
		}
		return map;
	}
	
	
}