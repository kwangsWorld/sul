package com.sul.app.review.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.sul.app.review.service.ReviewService;
import com.sul.app.review.vo.ReviewVo;

import lombok.RequiredArgsConstructor;

@Controller
@RequestMapping("review")
@RequiredArgsConstructor
public class ReviewController {

	private final ReviewService service;
	
	//∏Æ∫‰(»≠∏È)
	@GetMapping("write")
	public String write() {
		return "review/write";
	}
	
	//∏Æ∫‰¿€º∫
	@PostMapping("write")
	public String write(ReviewVo vo) throws Exception {
		int result = service.write(vo);
		
		if(result != 1) {
			throw new Exception();
		}
		return "redirect:/";
	}
}
