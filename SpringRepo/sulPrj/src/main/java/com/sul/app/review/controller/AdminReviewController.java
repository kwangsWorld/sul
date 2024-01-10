package com.sul.app.review.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.sul.app.review.service.ReviewService;
import com.sul.app.review.vo.ReviewVo;

import lombok.RequiredArgsConstructor;

@Controller
@RequestMapping("adminReview")
@RequiredArgsConstructor
public class AdminReviewController {

	private final ReviewService service;

	// 리뷰 목록 조회 (관리자)
	@GetMapping("list")
	public List<ReviewVo> adminList() {
		return service.adminList();
	}
	
	// 리뷰 목록 상세보기 (관리자)
	@GetMapping("detail")
	public ReviewVo adminDetail(String no) {
		return service.adminDetail(no);
	}
	
	// 리뷰 삭제 (관리자)
	@PostMapping("delete")
	public Map<String,String> adminDelete(String no) {
		
		Map<String,String> map = new HashMap<String , String>();
		int result = service.adminDelete(no);
		
		if(result == 1) {
			map.put("msg", "good");
		}else {
			map.put("msg", "bad");
		}
		return map;
	}
	
}
