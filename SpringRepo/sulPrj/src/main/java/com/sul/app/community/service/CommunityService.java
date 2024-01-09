package com.sul.app.community.service;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Service;

import com.sul.app.community.dao.CommunityDao;
import com.sul.app.community.vo.CommunityVo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CommunityService {

	private final CommunityDao dao;
	private final SqlSessionTemplate sst;
	
	//작성하기
	public int insert(CommunityVo vo) {
		return dao.insert(sst, vo);
	}

	//목록
	public List<CommunityVo> list() {
		return dao.list(sst);
	}

	//상세조회
	public CommunityVo detail(CommunityVo vo) {
		return dao.detail(sst, vo);
	}

	//수정
	public int edit(CommunityVo vo) {
		return dao.edit(sst, vo);
	}

	//삭제
	public int delete(CommunityVo vo) {
		return dao.delete(sst, vo);
	}

	

}
