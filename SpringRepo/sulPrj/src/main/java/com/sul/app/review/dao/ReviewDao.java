package com.sul.app.review.dao;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.sul.app.review.vo.ReviewVo;

@Repository
public class ReviewDao {

	//∏Æ∫‰¿€º∫
	public int write(SqlSessionTemplate sst, ReviewVo vo) {
		return sst.insert("ReviewMapper.write", vo);
	}

}
