package com.sul.app.communitycommt.dao;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.sul.app.communitycommt.vo.CcommtVo;

@Repository
public class CcommtDao {

	//댓글작성
	public int insert(SqlSessionTemplate sst, CcommtVo vo) {
		return sst.insert("CcommtMapper.insert" , vo);
	}

	//댓글삭제
	public int delete(SqlSessionTemplate sst, CcommtVo vo) {
		return sst.update("CcommtMapper.delete", vo);
	}

}
