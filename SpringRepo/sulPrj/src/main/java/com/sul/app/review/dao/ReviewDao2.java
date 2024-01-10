package com.sul.app.review.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.sul.app.review.vo.ReviewVo;

@Repository
public class ReviewDao2 {
	
	// 리뷰 목록 조회 (관리자)
	public List<ReviewVo> adminList(SqlSessionTemplate sst) {
		return sst.selectList("ReviewMapper.adminList");
		
	}
	
	// 리뷰 목록 상세보기 (관리자)
	public ReviewVo adminDetail(SqlSessionTemplate sst , String no) {
		return sst.selectOne("ReviewMapper.adminDetail" , no);
	}
	
	// 리뷰 삭제 (관리자)
	public int adminDelete(SqlSessionTemplate sst , String no) {
		return sst.update("ReviewMapper.adminDelete" , no);
	}
	

}
