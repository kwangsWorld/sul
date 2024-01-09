package com.sul.app.community.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.sul.app.community.vo.CommunityVo;

@Repository
public class CommunityDao {

	//게시글 작성
	public int insert(SqlSessionTemplate sst, CommunityVo vo) {
		return sst.insert("CommunityMapper.insert", vo);
	}

	//목록
	public List<CommunityVo> list(SqlSessionTemplate sst) {
		return sst.selectList("CommunityMapper.list");
	}

	//상세조회
	public CommunityVo detail(SqlSessionTemplate sst, CommunityVo vo) {
		return sst.selectOne("CommunityMapper.detail", vo);
	}

	//수정
	public int edit(SqlSessionTemplate sst, CommunityVo vo) {
		return sst.update("CommunityMapper.edit", vo);
	}

	//삭제
	public int delete(SqlSessionTemplate sst, CommunityVo vo) {
		return sst.update("CommunityMapper.delete", vo);
	}
	
	
	

	
}
