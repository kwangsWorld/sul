package com.sul.app.communitycommt.dao;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.sul.app.communitycommt.vo.CcommtVo;

@Repository
public class CcommtDao {

	//¥Ò±€ ¿€º∫
	public int insert(SqlSessionTemplate sst, CcommtVo vo) {
		return sst.insert("CcommtMapper.insert" , vo);
	}

	//¥Ò±€ ªË¡¶
	public int delete(SqlSessionTemplate sst, CcommtVo vo) {
		return sst.update("CcommtMapper.delete", vo);
	}

}
