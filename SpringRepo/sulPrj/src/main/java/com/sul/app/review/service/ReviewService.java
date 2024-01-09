package com.sul.app.review.service;

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
	
	//∏Æ∫‰¿€º∫
	public int write(ReviewVo vo) {
		return dao.write(sst, vo);
	}

}
