package com.sul.app.review.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.sul.app.common.PageVo;
import com.sul.app.review.vo.ReviewVo;

@Repository
public class ReviewDao {

	// 작성하기 (회원)
	public int write(SqlSessionTemplate sst, ReviewVo vo) {
		return sst.insert("ReviewMapper.write", vo);
	}
	
	// 리뷰 목록 조회 (관리자) (한 페이지 리스트)
	public List<ReviewVo> list(SqlSessionTemplate sst, PageVo vo) {
		return sst.selectList("ReviewMapper.list", vo);
	}
	
	// 리뷰 목록 조회 (관리자) (전체 리스트)
	public List<ReviewVo> listAll(SqlSessionTemplate sst, PageVo vo) {
		return sst.selectList("ReviewMapper.listAll", vo);
	}
	
	// 리뷰 목록 상세보기 (관리자)
	public ReviewVo detail(SqlSessionTemplate sst , ReviewVo vo) {
		return sst.selectOne("ReviewMapper.detail" , vo);
	}
	
	// 리뷰 삭제 (관리자)
	public int delete(SqlSessionTemplate sst , ReviewVo vo) {
		return sst.update("ReviewMapper.delete" , vo);
	}

}
