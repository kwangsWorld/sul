package com.sul.app.review.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.sul.app.review.service.ReviewService2;
import com.sul.app.review.vo.ReviewVo;

import lombok.RequiredArgsConstructor;

@Controller
@RequestMapping("review")
@RequiredArgsConstructor
public class ReviewController2 {

	private final ReviewService2 service2;

	// 리뷰 목록 조회 (관리자)
	@GetMapping("adminList")
	public List<ReviewVo> adminList() {
		return service2.adminList();
	}
	
	// 리뷰 목록 상세보기 (관리자)
	@GetMapping("adminDetail")
	public ReviewVo adminDetail(String no) {
		return service2.adminDetail(no);
	}
	
	// 리뷰 삭제 (관리자)
	@PostMapping("adminDelete")
	public Map<String,String> adminDelete(String no) {
		
		Map<String,String> map = new HashMap<String , String>();
		int result = service2.adminDelete(no);
		
		if(result == 1) {
			map.put("msg", "good");
		}else {
			map.put("msg", "bad");
		}
		return map;
	}
	
}
