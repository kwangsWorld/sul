package com.sul.app.review.controller;

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
import com.sul.app.review.service.ReviewService;
import com.sul.app.review.vo.ReviewVo;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("adminReview")
@RequiredArgsConstructor
public class AdminReviewController {

	private final ReviewService service;

	// 리뷰 목록 조회 (관리자)
	@PostMapping("list")
	public Map<String, Object> list(@RequestBody PageVo vo) {
		
		Map<String,Object> map = new HashMap<String, Object>();
		
		int start = (Integer.parseInt(vo.getPageNo())-1)*Integer.parseInt(vo.getLimit());
		
		vo.setPageNo(Integer.toString(start));
		
		int pageTotal = (int)Math.ceil((double)service.listAll(vo).size()/Integer.parseInt(vo.getLimit()));
		
		List<ReviewVo> voList = new ArrayList<ReviewVo>();
		
		voList = service.list(vo);
		map.put("pageTotal", pageTotal);
		map.put("voList", voList);
		
		return map;
	}
	
	// 리뷰 목록 상세보기 (관리자)
	@GetMapping("detail")
	public ReviewVo detail(ReviewVo vo) {
		return service.detail(vo);
	}
	
	// 리뷰 삭제 (관리자)
	@PostMapping("delete")
	public Map<String,String> delete(@RequestBody ReviewVo vo) {
		
		Map<String,String> map = new HashMap<String , String>();
		int result = service.delete(vo);
		
		if(result == 1) {
			map.put("msg", "good");
		}else {
			map.put("msg", "bad");
		}
		return map;
	}
	
}
