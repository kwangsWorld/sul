package com.sul.app.review.service;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Service;

import com.sul.app.review.dao.ReviewDao2;
import com.sul.app.review.vo.ReviewVo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ReviewService2 {

	private final ReviewDao2 dao2;
	private final SqlSessionTemplate sst;
	
	// 리뷰 목록 조회 (관리자)
	public List<ReviewVo> adminList() {
		return dao2.adminList(sst);
	}
	
	// 리뷰 목록 상세보기 (관리자)
	public ReviewVo adminDetail(String no) {
		return dao2.adminDetail(sst, no);
	}
	
	// 리뷰 삭제 (관리자)
	public int adminDelete(String no) {
		return dao2.adminDelete(sst, no);
	}
	
}
