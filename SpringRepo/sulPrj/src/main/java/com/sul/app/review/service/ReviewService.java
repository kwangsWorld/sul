package com.sul.app.review.service;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Service;

import com.sul.app.review.dao.ReviewDao;
import com.sul.app.review.vo.ReviewVo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ReviewService {

	private final ReviewDao dao;
	private final SqlSessionTemplate sst;
	
	// 작성하기 (회원)
	public int write(ReviewVo vo) {
		return dao.write(sst, vo);
	}
	
	// 리뷰 목록 조회 (관리자)
	public List<ReviewVo> adminList() {
		return dao.adminList(sst);
	}
	
	// 리뷰 목록 상세보기 (관리자)
	public ReviewVo adminDetail(String no) {
		return dao.adminDetail(sst, no);
	}
	
	// 리뷰 삭제 (관리자)
	public int adminDelete(String no) {
		return dao.adminDelete(sst, no);
	}

}
