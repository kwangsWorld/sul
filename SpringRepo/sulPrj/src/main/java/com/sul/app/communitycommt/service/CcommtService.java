package com.sul.app.communitycommt.service;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Service;

import com.sul.app.communitycommt.dao.CcommtDao;
import com.sul.app.communitycommt.vo.CcommtVo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CcommtService {

	private final CcommtDao dao;
	private final SqlSessionTemplate sst;
	
	//댓글작성
	public int insert(CcommtVo vo) {
		return dao.insert(sst, vo);
	}

	//댓글삭제
	public int delete(CcommtVo vo) {
		return dao.delete(sst, vo);
	}

}
