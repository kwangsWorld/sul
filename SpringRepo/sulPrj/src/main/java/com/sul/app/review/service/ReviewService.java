package com.sul.app.review.service;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Service;

import com.sul.app.common.PageVo;
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
		String str = vo.getImg().replace("C:\\sulRepo\\SpringRepo\\sulPrj\\src\\main\\webapp", "http://127.0.0.1:8888/app");
		vo.setImg(str);
		
		return dao.write(sst, vo);
	}
	
	// 리뷰 목록 조회 (관리자) (한 페이지 리스트)
	public List<ReviewVo> list(PageVo vo) {
		return dao.list(sst, vo);
	}
	
	// 리뷰 목록 조회 (관리자) (전체 리스트)
	public List<ReviewVo> listAll(PageVo vo) {
		return dao.listAll(sst, vo);
	}
	
	// 리뷰 목록 상세보기 (관리자)
	public ReviewVo detail(ReviewVo vo) {
		return dao.detail(sst, vo);
	}
	
	// 리뷰 삭제 (관리자)
	public int delete(ReviewVo vo) {
		return dao.delete(sst, vo);
	}
	
	// 리뷰 조회 (유저)
    public List<ReviewVo> memberList(String memberNo) {
        return dao.memberList(sst, memberNo);
    }

}
